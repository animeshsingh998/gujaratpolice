import { createReducer } from "@reduxjs/toolkit";

const initialState = {stage: "one"}

export const formReducer = createReducer(initialState, {
  createFormRequest: (state) => {
    state.createFormLoading = true;
  },
  createFormSuccess: (state, action) => {
    state.createFormLoading = false;
    state.formMessage = action.message;
  },
  createFormFailure: (state, action) => {
    state.createFormLoading = false;
    state.createFormError = action.error;
  },
  clearFormMessage: (state) => {
    state.formMessage = null;
  },
  allFormsRequest: (state) => {
    state.allFormsLoading = true;
  },
  allFormsSuccess: (state, action) => {
    state.allFormsLoading = false;
    state.forms = action.payload;
  },
  allFormsFailure: (state, action) => {
    state.allFormsLoading = false;
    state.allFormsError = action.error;
  },
  delFormRequest: (state) => {
    state.delFormLoading = true;
  },
  delFormSuccess: (state, action) => {
    state.delFormLoading = false;
    state.message = action.massage;
  },
  delFormFailure: (state, action) => {
    state.delFormLoading = false;
    state.delFormError = action.error;
  },
  getFormViewRequest: (state) => {
    state.getFormViewLoading = true;
  },
  getFormViewSuccess: (state, action) => {
    state.getFormViewLoading = false;
    state.formView = action.payload;
  },
  getFormViewFailure: (state, action) => {
    state.getFormViewLoading = false;
    state.getFormViewError = action.error;
  },
  genQrRequest: (state) => {
    state.genQrLoading = true;
  },
  genQrSuccess: (state, action) => {
    state.genQrLoading = false;
    state.qrCode = action.payload;
  },
  genQrFailure: (state, action) => {
    state.genQrLoading = false;
    state.genQrError = action.error;
  },
  submitFeedbackRequest: (state) => {
    state.submitFeedbackLoading = true;
  },
  submitFeedbackSuccess: (state, action) => {
    state.submitFeedbackLoading = false;
    state.message = action.message;
    state.stage = "two";
  },
  submitFeedbackFailure: (state, action) => {
    state.submitFeedbackLoading = false;
    state.submitFeedbackError = action.error;
  },
  getResponsesRequest: (state) => {
    state.getResponsesLoading = true;
  },
  getResponsesSuccess: (state, action) => {
    state.getResponsesLoading = false;
    state.Responses = action.payload;
  },
  getResponsesFailure: (state, action) => {
    state.getResponsesLoading = false;
    state.getResponsesError = action.error;
  },
  getUserDetailsRequest: (state) => {
    state.getUserDetailsLoading = true;
  },
  getUserDetailsSuccess: (state, action) => {
    state.getUserDetailsLoading = false;
    state.userDetails = action.payload;
  },
  getUserDetailsFailure: (state, action) => {
    state.getUserDetailsLoading = false;
    state.getUserDetailsError = action.error;
  },
  getCsvRequest: (state) => {
    state.getCsvLoading = true;
  },
  getCsvSuccess: (state, action) => {
    state.getCsvLoading = false;
    state.csvData = action.payload;
  },
  getCsvFailure: (state, action) => {
    state.getCsvLoading = false;
    state.getCsvError = action.error;
  },
  getChartDataORequest: (state) => {
    state.chartDataOLoading = true;
  },
  getChartDataOSuccess: (state, action) => {
    state.chartDataOLoading = false;
    state.chartDataO = action.payload;
  },
  getChartDataOFailure: (state, action) => {
    state.chartDataOLoading = false;
    state.chartDataOError = action.error;
  },
  getChartDataRequest: (state) => {
    state.chartDataLoading = true;
  },
  getChartDataSuccess: (state, action) => {
    state.chartDataLoading = false;
    state.chartData = action.payload;
  },
  getChartDataFailure: (state, action) => {
    state.chartDataLoading = false;
    state.chartDataError = action.error;
  },
});
