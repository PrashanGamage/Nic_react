import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
} from '@coreui/react-chartjs'
import axios from 'axios'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'

const Data = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [barChartData, setBarChartData] = useState([])
  const [barChartLabels, setBarChartLabels] = useState([])
  const [lineChartData, setLineChartData] = useState([])
  const [lineChartLabels, setLineChartLabels] = useState([])
  const [doughnutChartData, setDoughnutChartData] = useState([])
  const [doughnutChartLabels, setDoughnutChartLabels] = useState([])
  const [polarChartData, setPolarChartData] = useState([])
  const [polarChartLabels, setPolarChartLabels] = useState([])

  const [pieChartData, setPieChartData] = useState([])
  const [pieChartLabels, setPieChartLabels] = useState([])

  const [resetPaginationToggle] = useState(false)

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8080/api/search')
    setData(response.data)
    setFilteredData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    {
      name: 'Full Name',
      selector: 'name',
      sortable: true,
      width: '200px',
    },
    {
      name: 'Age',
      selector: 'age',
      sortable: true,
      width: '150px',
    },
    {
      name: 'Birthday',
      selector: 'birthday',
      sortable: true,
      width: '150px',
    },
    {
      name: 'Gender',
      selector: 'gender',
      sortable: true,
      width: '150px',
    },
    {
      name: 'Mobile Number',
      selector: 'pno',
      sortable: true,
      width: '150px',
    },
    {
      name: 'Address',
      selector: 'address',
      sortable: true,
      width: '150px',
    },
    {
      name: 'Nationality',
      selector: 'nationality',
      sortable: true,
      width: '150px',
    },
    {
      name: 'NIC',
      selector: 'nic',
      sortable: true,
      width: '150px',
    },
  ]

  const handleAgeFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filtered = data.filter((item) => item.age && item.age.toString().includes(searchTerm))
    setFilteredData(filtered)
  }

  const handleGenderFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filtered = data.filter(
      (item) => item.gender && item.gender.toString().toLowerCase().includes(searchTerm),
    )
    setFilteredData(filtered)
  }

  const handleNameFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filtered = data.filter(
      (item) => item.name && item.name.toLowerCase().includes(searchTerm),
    )
    setFilteredData(filtered)
  }

  const handleMobileFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filtered = data.filter(
      (item) => item.pno && item.pno.toLowerCase().includes(searchTerm),
    )
    setFilteredData(filtered)
  }

  const handleAddressFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filtered = data.filter(
      (item) => item.address && item.address.toLowerCase().includes(searchTerm),
    )
    setFilteredData(filtered)
  }

  const handleNationalityFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filtered = data.filter(
      (item) => item.nationality && item.nationality.toLowerCase().includes(searchTerm),
    )
    setFilteredData(filtered)
  }

  //Bar Chart for Ages
  const barChart = {
    labels: barChartLabels,
    datasets: [
      {
        label: 'Count',
        backgroundColor: '#433751',
        borderColor: '#433751',
        borderWidth: 1,
        hoverBackgroundColor: '#2F576E',
        hoverBorderColor: '#433751',
        data: barChartData,
      },
    ],
  }

  useEffect(() => {
    const ages = filteredData.map((item) => item.age)
    const bins = [0, 20, 30, 40, 50, 60]
    const labels = bins.map((bin, i) => {
      const label = i === bins.length - 1 ? `${bins[i - 1]}+` : `${bin}-${bins[i + 1] - 1}`
      return label
    })

    const data = labels.map((label, i) => {
      const lowerBound = bins[i]
      const upperBound = i === bins.length - 1 ? Infinity : bins[i + 1] - 1
      const count = ages.filter((age) => age >= lowerBound && age <= upperBound).length
      return count
    })
    setBarChartLabels(labels)
    setBarChartData(data)
  }, [filteredData])

  //Line Chart for Birth Year
  const lineChart = {
    labels: lineChartLabels,
    datasets: [
      {
        label: 'Count',
        backgroundColor: '#433751',
        borderColor: '#433751',
        borderWidth: 1,
        hoverBackgroundColor: '#433751',
        hoverBorderColor: '#433751',
        data: lineChartData,
      },
    ],
  }

  useEffect(() => {
    const birthday = filteredData.map((item) => parseInt(item.birthday.substring(0, 4)))
    const bins = [1960, 1970, 1980, 1990, 2000]
    const labels = bins.map((bin, i) => {
      return i < bins.length - 1 ? `${bin}-${bins[i + 1] - 1}` : `${bin}+`
    })

    const data = labels.map((label, i) => {
      const lowerBound = bins[i]
      const upperBound = i === bins.length - 1 ? Infinity : bins[i + 1]
      const count = birthday.filter((year) => {
        return year >= lowerBound && year < upperBound
      }).length
      return count
    })

    setLineChartLabels(labels)
    setLineChartData(data)
  }, [filteredData])

  //Pie Chart for Gender
  const pieChart = {
    labels: pieChartLabels,
    datasets: [
      {
        label: 'Count',
        backgroundColor: ['#433751', '#433751', '#433751', '#433751'],
        data: pieChartData,
      },
    ],
  }

  useEffect(() => {
    const nationalities = filteredData.map((item) => item.nationality)
    const bins = [ 'Tamil', 'Muslim', 'Burger', 'Sinhala']
    const labels = bins.map((bin) => bin)

    const data = labels.map((label, i) => {
      const count = nationalities.filter((nat) => nat === bins[i]).length
      return count
    })

    setPieChartLabels(labels)
    setPieChartData(data)
  }, [filteredData])

  //Doughnut Chart for Mobile Number
  const doughnutChart = {
    labels: doughnutChartLabels,
    datasets: [
      {
        label: 'Count',
        borderWidth: 1,
         backgroundColor: ['#433680', '#4367851', '#234751', '#433751', '#433751'],
        data: doughnutChartData,
      },
    ],
  }

  useEffect(() => {
    if (!filteredData || filteredData.length === 0) {
      setPolarChartLabels([])
      setPolarChartData([])
      return
    }

    const gender = filteredData.map((item) => item.pno)
    const bins = ['077', '071','070',  '078', '075'] // Sort the bins in ascending order
    const labels = bins.map((bin) => bin)

    const data = labels.map((label, i) => {
      const lowerBound = parseInt(bins[i])
      const upperBound = i === bins.length - 1 ? Infinity : parseInt(bins[i + 1]) - 1
      const count = gender.filter((pno) => {
        const mobileNumber = parseInt(pno.substring(0, 3))
        return mobileNumber >= lowerBound && mobileNumber <= upperBound
      }).length
      return count
    })

    setDoughnutChartLabels(labels)
    setDoughnutChartData(data)
  }, [filteredData])

  //Polar Chart for NIC
  const polarChart = {
    labels: polarChartLabels,
    datasets: [
      {
        label: 'Count',
        borderWidth: 1,
        backgroundColor: ['#FF0000','#433751'],
        data: polarChartData,
      },
    ],
  }

  useEffect(() => {
    const oldNIC = filteredData.filter((item) => {
      return item.nic.length === 10 // old NICs have a length of 10
    })
    const newNIC = filteredData.filter((item) => {
      return item.nic.length === 12 // new NICs have a length of 12
    })
    const labels = [ 'New NIC','Old NIC']
    const data = [oldNIC.length, newNIC.length]
    setPolarChartLabels(labels)
    setPolarChartData(data)
  }, [filteredData])

  return (
    <CRow>
      <CCol>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <div>
              
                  <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={handleNameFilter}
                    className="form-control"
                  />
              
                  <input
                    type="number"
                    placeholder="Search by Age"
                    onChange={handleAgeFilter}
                    className="form-control"
                  />
             
                  <input
                    type="text"
                    placeholder="Search by Gender"
                    onChange={handleGenderFilter}
                    className="form-control"
                  />
               
                  <input
                    type="number"
                    placeholder="Search by Mobile"
                    onChange={handleMobileFilter}
                    className="form-control"
                  />
               
                  <input
                    type="text"
                    placeholder="Search by Address"
                    onChange={handleAddressFilter}
                    className="form-control"
                  />
               
                  <input
                    type="text"
                    placeholder="Search by Nationality"
                    onChange={handleNationalityFilter}
                    className="form-control"
                  />
                  </div>
              
            </CCardHeader>
          </CCard>
        </CCol>

        <CRow>
          <CCol lg={6}>
            <CCard className="mb-4 mt-4">
              <CCardBody>
                <CChartBar data={barChart} />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol  lg={6}>
            <CCard className="mb-4 mt-4">

              <CCardBody>
                <CChartLine data={lineChart} />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol  lg={6}>
            <CCard className="mb-4 mt-4">
              <CCardBody>
                <CChartDoughnut data={doughnutChart} />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol lg={6}>
            <CCard className="mb-4 mt-4">
              <CCardBody>
                <CChartPie data={pieChart} />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol  lg={6}>
            <CCard className="mb-4 mt-4">
              <CCardBody>
                <CChartPolarArea data={polarChart} />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol xs={12}>
            <CCard className="mb-4">
              

              <CCardBody>
                <DataTable
                  columns={columns}
                  data={filteredData}
                  highlightOnHover={true}
                  striped={true}
                  dense={true}
                  pagination
                  paginationResetDefaultPage={resetPaginationToggle}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default Data
