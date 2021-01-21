import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPatientsData = createAsyncThunk(
  'chart/fetchPatients',
  async specialtyId => {
    return await axios(`${process.env.REACT_APP_API_ADDRESS}api/Data/Patients`)
      .then(res => Object.keys(res.data).map(i => res.data[i]))
      .catch(err => {
        return Promise.reject(err);
      });
  }
);

export const dataFetchSlice = createSlice({
  name: 'dataFetch',
  initialState: {
    status: 'idle',
    patientData: [
      { label: 'A', patients: 10, weekNumber: 22 },
      { label: 'B', patients: 7, weekNumber: 33 },
      { label: 'C', patients: 4, weekNumber: 31 },
      { label: 'D', patients: 14, weekNumber: 12 },
    ],
  },
  reducers: {},
  extraReducers: {
    [fetchPatients.pending]: state => {
      state.data.status = 'loading';
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.data.status = 'succeeded';
      state.data.patientData = action.payload;
    },
    [fetchPatients.rejected]: (state, action) => {
      state.data.status = 'failed';
      state.data.error = action.error;
    },
  },
});

export const selectFilteredPatientData = state => state.patientData.data;
