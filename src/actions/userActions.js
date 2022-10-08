import axios from "axios";

const baseUrl = "https://ssipiter2.ansh10rajput.repl.co";

export const getOtp = (name, email) => async (dispatch) => {
  try {
    dispatch({
      type: "getOtpRequest",
    });
    const { data } = await axios.post(
      `${baseUrl}/getotp`,
      {
        name,
        email,
      }
    );

    dispatch({
      type: "getOtpSuccess",
      payload: data.otp,
    });
  } catch (error) {
    dispatch({
      type: "getOtpFailure",
      error: error.response.data.error
    });
  }
};

export const loginUser = (name, email, validate, userOtp, otp) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });
    const { data } = await axios.post(`${baseUrl}/validate`, {
      name,
      email,
      validate,
      otpUser: userOtp,
      otpServer: otp,
    });

    dispatch({
      type: "loginSuccess",
      token: data.token,
    });
    window.localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch({
      type: "loginFailure",
      error: error.response.data.error,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    dispatch({
      type: "logoutSuccess",
      payload: false,
    });
    window.localStorage.removeItem('adminToken');
    window.localStorage.removeItem('adminDetails');
  } catch (error) {
    dispatch({
      type: "logoutFailure",
    });
  }
};

export const adminLogin = (email, pass) => async (dispatch) => {
  try {
    dispatch({
      type: "adminLoginRequest",
    });

    const { data } = await axios.post(`${baseUrl}/admin_login`, {
      email,
      password: pass
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    window.localStorage.setItem("adminToken", data.token);
    dispatch({
      type: "adminLoginSuccess",
      payload: data
    });

  } catch (error) {
    await dispatch({
      type: "adminLoginFailure",
      error: error.response.data.error
    });
  }
}

export const getAdminDetails = (adminToken) => async (dispatch) => {
  try {
    dispatch({
      type: "adminDetailsRequest",
    });

    const { data } = await axios.get(`${baseUrl}/getadmindetails`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
    });

    window.localStorage.setItem("adminDetails", JSON.stringify(data));

    dispatch({
      type: "adminDetailsSuccess",
      payload: data
    });
  } catch (error) {
    dispatch({
      type: "adminDetailsFailure",
    });
  }
}

export const adminSignup = (admindetails) => async (dispatch) => {
  try {
    dispatch({
      type: "adminSignupRequest",
    });

    const { data } = await axios.post(`${baseUrl}/admin_signup`, {
      email: admindetails.email,
      psname: admindetails.psname,
      subdiv: admindetails.subDiv,
      district: admindetails.district,
      password: admindetails.password,
      adminName: admindetails.name,
    });

    dispatch({
      type: "adminSignupSuccess",
      message: data.message
    });
  } catch (error) {
    dispatch({
      type: "adminSignupFailure",
      error: error.response.data.error
    });
  }
}

export const getSemtiments = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "getSentimentRequest",
    });

    const { data } = await axios.get(`${baseUrl}/masterviewdetail`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "getSentimentSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getSentimentFailure",
      error: error.response.data.error,
    });
  }
};

export const getSubWise = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "getSubWiseRequest",
    });

    const { data } = await axios.get(`${baseUrl}/subdivwise`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "getSubWiseSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getSubWiseFailure",
      error: error.response.data.error,
    });
  }
};

export const getDisWise = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "getDisWiseRequest",
    });

    const { data } = await axios.get(`${baseUrl}/diswise`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "getDisWiseSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getDisWiseFailure",
      error: error.response.data.error,
    });
  }
};

export const getMChartData = (uri, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getMChartDataRequest",
    });

    const { data } = await axios.get(`${baseUrl}/${uri}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "getMChartDataSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getMChartDataFailure",
      error: error.response.data.error,
    });
  }
};

export const getMChartDataO = (uri, token) => async (dispatch) => {
  try {
    dispatch({
      type: "getMChartDataORequest",
    });

    const { data } = await axios.get(
      `${baseUrl}/${uri}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "getMChartDataOSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getMChartDataOFailure",
      error: error.response.data.error,
    });
  }
};

export const getIpAd = (email) => async (dispatch) => {
  try {
    const {data} = await axios.get(
      "https://geolocation-db.com/json/"
    );
    axios.post(`${baseUrl}/multiplefailure`, {
      data,
      email
    })
  } catch (error) {
    console.log(error);
  }
}
