
export const userColumns = [

    { field: "id", headerName: "ID", width: 60 },
    {
      field: "full_name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.full_name}
          </div>
        );
      },
    },
    {
      field: "pno",
      headerName: "Mobile",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.pno}
          </div>
        );
      },
    
    },
    {
      field: "nationality",
      headerName: "Nationality",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
    },
  
    {
      field: "nic",
      headerName: "Nic",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
 // temporary data
  export const userRows = [
    {
      
        "id": '',
        "nic": "1",
        "pno": "",
        "name": "",
        "nationality": "",
        // "birthday": null,
        // "gender": null,
        // "age": 0,
        "address": ""
    }
    // {
    //   id: 1,
    //   Name: "",
    //   img: "",
    //   Mobile: "",
    //   status: "",
    //   email: "",
    //   Nic:null,
    // }
    // {
    //   id: 2,
    //   Name: "Jamie Lannister",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "2snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "passive",
    //   Nic: 42,
    // },
    // {
    //   id: 3,
    //   Name: "Lannister",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "3snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "pending",
    //   Nic: 45,
    // },
    // {
    //   id: 4,
    //   Name: "Stark",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "4snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "active",
    //   Nic: 16,
    // },
    // {
    //   id: 5,
    //   Name: "Targaryen",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "5snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "passive",
    //   Nic: 22,
    // },
    // {
    //   id: 6,
    //   Name: "Melisandre",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "6snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "active",
    //   Nic: 15,
    // },
    // {
    //   id: 7,
    //   Name: "Clifford",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "7snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "passive",
    //   Nic: 44,
    // },
    // {
    //   id: 8,
    //   Name: "Frances",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "8snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "active",
    //   Nic: 36,
    // },
    // {
    //   id: 9,
    //   Name: "Roxie",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "pending",
    //   Nic: 65,
    // },
    // {
    //   id: 10,
    //   Name: "Roxie",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "snow@gmail.com",
    //   Mobile: "0711690260",
    //   status: "active",
    //   Nic: 65,
    // },
  ];
  