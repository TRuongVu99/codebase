import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  storageMethod,
  getValueFromStorage,
  saveToStorage,
} from '@/Common/Storage'
import ENVConfig, { ENVDynamic, ENVName } from '@/Config/Env'
import { AppState } from '@/Models/App'

const initialAppState: AppState = {
  internetState: true,
  firstTimeLauch: false,
  env: ENVConfig,
}

export const appInit = createAsyncThunk(
  'app/initialize',
  async (_params, { dispatch }) => {
    try {
      const showIntroduce = getValueFromStorage(
        storageMethod.Boolean,
        'showIntroduce',
      ) as boolean
      // state.firstTimeLauch = showIntroduce !== undefined ? showIntroduce : true;

      const envConfig = getValueFromStorage(
        storageMethod.String,
        'envConfig',
      ) as ENVName
      return { showIntroduce, envConfig }
    } catch (error) {
      console.log(error)
    }
  },
)

const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    onSetInternet: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.internetState = payload
    },
    onFirstTimeLauch: (state: AppState) => {
      saveToStorage('showIntroduce', false)
      state.firstTimeLauch = false
    },
  },
  extraReducers: builder => {
    // App initial
    builder.addCase(appInit.fulfilled, (state, action) => {
      const { payload } = action
      if (payload?.envConfig) {
        state.env = ENVDynamic(payload?.envConfig)
      } else {
        state.env = ENVConfig
      }
    })
  },
})
export const { reducer: appReducer, actions: appActions } = appSlice
