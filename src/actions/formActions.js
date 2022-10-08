import axios from "axios";

const baseUrl = "https://ssipiter2.ansh10rajput.repl.co";

const adminToken = window.localStorage.getItem("adminToken");
// const userToken = window.localStorage.getItem("token");

// const newToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MzY0OTM1NywianRpIjoiMjQxNzZhN2YtY2E3Yy00MzlkLTkzNjQtNTE2OTZjMzZhNzJlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJhbnNoNjQ5QGdtYWlsLmNvbSIsIm5iZiI6MTY2MzY0OTM1NywiZXhwIjoxNjY0MjU0MTU3fQ.iWhw8G3TXSrIhUUGlCp1KWECdo2rtJhz553IK-jo524";

export const createForm = (formName) => async (dispatch) => {
  try {
    dispatch({
      type: "createFormRequest",
    });
    const { data } = await axios.post(
      `${baseUrl}/createform`,
      {
        formName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );

    dispatch({
      type: "createFormSuccess",
      message: data.message,
    });
  } catch (error) {
    dispatch({
      type: "createFormFailure",
      error: error.response.data.error,
    });
  }
};

export const getAllForms = (newT) => async (dispatch) => {
  try {
    dispatch({
      type: "allFormsRequest",
    });

    const { data } = await axios.get(`${baseUrl}/allforms`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newT}`,
      },
    });

    dispatch({
      type: "allFormsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "allFormsFailure",
      error: error.response.data.error,
    });
  }
};

export const delForm = (formId) => async (dispatch) => {
  try {
    dispatch({
      type: "delFormRequest",
    });

    const { data } = await axios.delete(`${baseUrl}/delform`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
      data: {
        formId
      },
    });

    dispatch({
      type: "delFormSuccess",
      message: data.message,
    });
  } catch (error) {
    dispatch({
      type: "delFormFailure",
      error: error.response.data.error,
    });
  }
};

export const getFormView = (formId, newUT) => async (dispatch) => {
    try {
        dispatch({
          type: "getFormViewRequest",
        });
        console.log(newUT)
        const { data } = await axios.post(
          `${baseUrl}/formview`,
          {
            formId
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newUT}`,
            },
          }
        );


        dispatch({
            type: "getFormViewSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
          type: "getFormViewFailure",
        });
    }
}

export const genQr = (formId) => async (dispatch) => {
  try {
    dispatch({
      type: "genQrRequest",
    });

    const { data } = await axios.post(
      `${baseUrl}/genqr`,
      {
        formId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );

    dispatch({
      type: 'genQrSuccess',
      payload: data.base64
    })
    
  } catch (error) {
    dispatch({
      type: "genQrFailure",
    });
  }
}

export const submitFeedback = (formId, formData, token) => async (dispatch) => {
  try {
    dispatch({
      type: "submitFeedbackRequest",
    });
    const { data } = await axios.post(
      `${baseUrl}/response`,
      {
        formData,
        formId
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "submitFeedbackSuccess",
      message: data.message
    })

    window.localStorage.removeItem('token');
  } catch (error) {
    dispatch({
      type: "submitFeedbackFailure",
    });
  }
}

export const getResponses = (formId, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getResponsesRequest",
    });

    const { data } = await axios.post(
      `${baseUrl}/viewdetail`,
      {
        formId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "getResponsesSuccess",
      payload: data
    });
    
  } catch (error) {
    dispatch({
      type: "getResponsesFailure",
      error: error.response.data.error
    });
  }
}

export const getUserDetails = (userId, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getUserDetailsRequest",
    });

    const { data } = await axios.post(
      `${baseUrl}/viewuserdetail`,
      {
        userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "getUserDetailsSuccess",
      payload: data
    });

  } catch (error) {
    dispatch({
      type: "getUserDetailsFailure",
      error: error.response.data.error
    });
  }
}

export const getCsvData = (formId, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getCsvRequest",
    });

    const { data } = await axios.post(
      `${baseUrl}/getcsv`,
      {
        formId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "getCsvSuccess",
      payload: data
    });

  } catch (error) {
    dispatch({
      type: "getCsvFailure",
      error: error.response.data.error
    });
  }
}

export const getChartData = (uri, formId, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getChartDataRequest",
    });

    const { data } = await axios.post(
      `${baseUrl}/${uri}`,
      { formId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "getChartDataSuccess",
      payload: data
    });
  } catch (error) {
    dispatch({
      type: "getChartDataFailure",
      error: error.response.data.error
    });
  }
}

export const getChartDataO = (uri, formId, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getChartDataORequest",
    });

    const { data } = await axios.post(
      `${baseUrl}/${uri}`,
      { formId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "getChartDataOSuccess",
      payload: data
    });
  } catch (error) {
    dispatch({
      type: "getChartDataOFailure",
      error: error.response.data.error
    });
  }
}


