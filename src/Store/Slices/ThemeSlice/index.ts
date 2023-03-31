import { createSlice } from '@reduxjs/toolkit';
import { ThemePayload, ThemeState } from './Type';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'default', darkMode: null } as ThemeState,
  reducers: {
    changeTheme: (
      state: ThemeState,
      { payload: { theme, darkMode } }: ThemePayload,
    ) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme;
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode;
      }
    },
    setDefaultTheme: (
      state: ThemeState,
      { payload: { theme, darkMode } }: ThemePayload,
    ) => {
      if (!state.theme) {
        if (typeof theme !== 'undefined') {
          state.theme = theme;
        }
        if (typeof darkMode !== 'undefined') {
          state.darkMode = darkMode;
        }
      }
    },
  },
});

export const { reducer: themeReducer, actions: themeActions } = themeSlice;
