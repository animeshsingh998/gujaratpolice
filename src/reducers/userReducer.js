import { createReducer } from "@reduxjs/toolkit";
const initialState = { isAuthenticated: false, sideDisabled: false, adminAuthenticated: false };

export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loginLoading = true;
    state.isAuthenticated = false;
  },
  loginSuccess: (state, action) => {
    state.loginLoading = false;
    state.isAuthenticated = true;
    // state.user = action.payload;
    state.token = action.token;
    state.LoginError = false;
  },
  loginFailure: (state, action) => {
    state.loginLoading = false;
    state.LoginError = action.error;
  },
  getOtpRequest: (state) => {
    state.otpLoading = true;
  },
  getOtpSuccess: (state, action) => {
    state.otpLoading = false;
    state.otp = action.payload;
    state.otpError = false;
  },
  getOtpFailure: (state, action) => {
    state.otpLoading = false;
    state.otpError = action.error;
  },
  logoutRequest: (state) => {
    state.logoutLoading = true;
  },
  logoutSuccess: (state, action) => {
    state.logoutLoading = false;
    state.isAuthenticated = action.payload;
    state.adminAuthenticated = action.payload;
    state.token = null;
    state.adminDetails = null;
  },
  logoutFailure: (state) => {
    state.logoutLoading = false;
    state.logoutError = true;
  },
  setAuthenticated: (state) => {
    state.isAuthenticated = true;
  },
  setAdminAuthenticated: (state) => {
    state.adminAuthenticated = true;
  },
  setSideDisable: (state) => {
    state.sideDisabled = true;
  },
  clearSideDisable: (state) => {
    state.sideDisabled = false;
  },
  adminLoginRequest: (state) => {
    state.adminLoginLoading = true;
    state.adminAuthenticated = false;
  },
  adminLoginSuccess: (state, action) => {
    state.adminLoginLoading = false;
    state.adminDetails = action.payload;
    state.adminAuthenticated = true;
  },
  adminLoginFailure: (state, action) => {
    state.adminLoginLoading = false;
    state.adminLoginError = action.error;
    state.adminAuthenticated = false;
  },
  clearAdminLoginError: (state) => {
    state.adminLoginError = null;
  },
  adminDetailsRequest: (state) => {
    state.adminDetailsLoading = true;
  },
  adminDetailsSuccess: (state, action) => {
    state.adminDetailsLoading = false;
    state.adminDetails = action.payload;
    state.adminAuthenticated = true;
  },
  adminDetailsFailure: (state, action) => {
    state.adminDetailsLoading = false;
    state.adminDetailsError = action.error;
    state.adminAuthenticated = false;
  },
  adminSignupRequest: (state) => {
    state.adminSignupLoading = true;
  },
  adminSignupSuccess: (state, action) => {
    state.adminSignupLoading = false;
    state.adminSuMessage = action.message;
  },
  adminSignupFailure: (state, action) => {
    state.adminSignupLoading = false;
    state.adminSignupError = action.error;
  },
  clearSuMessage: (state) => {
    state.adminSuMessage = null;
  },
  getSentimentRequest: (state) => {
    state.getSentimentLoading = true;
  },
  getSentimentSuccess: (state, action) => {
    state.getSentimentLoading = false;
    state.sentiments = action.payload;
  },
  getSentimentFailure: (state, action) => {
    state.getSentimentLoading = false;
    state.getSentimentError = action.error;
  },
  getMChartDataRequest: (state) => {
    state.MchartDataLoading = true;
  },
  getMChartDataSuccess: (state, action) => {
    state.MchartDataLoading = false;
    state.MchartData = action.payload;
  },
  getMChartDataFailure: (state, action) => {
    state.MchartDataLoading = false;
    state.MchartDataError = action.error;
  },
  getMChartDataORequest: (state) => {
    state.MchartDataOLoading = true;
  },
  getMChartDataOSuccess: (state, action) => {
    state.MchartDataOLoading = false;
    state.MchartDataO = action.payload;
  },
  getMChartDataOFailure: (state, action) => {
    state.MchartDataOLoading = false;
    state.MchartDataOError = action.error;
  },
  getSubWiseRequest: (state) => {
    state.getSubWiseLoading = true;
  },
  getSubWiseSuccess: (state, action) => {
    state.getSubWiseLoading = false;
    state.subWise = action.payload;
  },
  getSubWiseFailure: (state, action) => {
    state.getSubWiseLoading = false;
    state.getSubWiseError = action.error;
  },
  getDisWiseRequest: (state) => {
    state.getDisWiseLoading = true;
  },
  getDisWiseSuccess: (state, action) => {
    state.getDisWiseLoading = false;
    state.disWise = action.payload;
  },
  getDisWiseFailure: (state, action) => {
    state.getDisWiseLoading = false;
    state.getDisWiseError = action.error;
  },
});
