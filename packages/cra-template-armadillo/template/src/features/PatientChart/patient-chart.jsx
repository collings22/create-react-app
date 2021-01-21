import React from 'react'
import { Spinner } from '../../Components/MedicorLoader'
import { useSelector } from 'react-redux'
import { BarChart } from '../../components/BarChart/BarChart'
import { selectFilteredPatientData } from './patient-chart-slice'

const PatientChart = () => {
  const data = useSelector((state) => selectFilteredPatientData(state))
  const loadingStatus = useSelector((state) => state.dataFetch.patientData.status)
  const error = useSelector((state) => state.dataFetch.patientData.error)

  if (loadingStatus === 'succeeded') {
    return (
      <BarChart data={data} />
    )
  } else if (loadingStatus === 'loading') {
    return <Spinner animation='border' />
  } else if (loadingStatus === 'failed') {
    console.log(error)
  }
  return <></>
}

export default PatientChart
