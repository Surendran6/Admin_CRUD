import React from 'react'
import DisplayDashboardData from './DisplayDashboardData'
import  Progressbar  from './progressbar';
import calender from './image/calendar.png';
import task from './image/task.png';
import pending from './image/pending.png';
import dollar from './image/dollar-symbol.png';
function AdminDashboard() {
    const datas = [
        {
            Earnings : "Earnings (Monthly)",
            value : "$40,000" , 
            symbol : <img className="image_pro1" src={calender} alt="profile img"/>,
            color:"primary"
        },
        {
            Earnings : "Earnings (Annual)",
            value : "$215,000",           
            symbol : <img className="image_pro1" src={dollar} alt="profile img"/>,            
            color : "success"
        },
        {
            Earnings : "Tasks",
            value : "50%",
            symbol : <img className="image_pro2" src={task} alt="profile img"/>,           
            color:"info"
        },
        {
            Earnings : "Pending Requests",
            value : "18",
            symbol : <img className="image_pro1" src={pending} alt="profile img"/>,            
            color:"warning"
        }
    ]
    
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                < h2 className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> 
                    Generate Report
                </h2>
            </div>
            <div className="row">
            {
                datas.map((data,index) => {
                return <DisplayDashboardData key = {index} data = {data} />
                })
            }
            </div>
            <div className="row">
                <div className="col-lg-6 mb-6">
                    <Progressbar />
                </div>             
            </div>
            
             <div>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; React 2021</span>
                    </div>
                </div>
            </footer></div>
        </>
    )
}

export default AdminDashboard
