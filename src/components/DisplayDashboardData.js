import React from 'react'

function DisplayDashboardData({data}) {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card  shadow h-100 py-2 border-left-${data.color}`} >
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className= {`text-${data.color} text-xs font-weight-bold text-uppercase mb-1`} >
                                {data.Earnings}
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{data.value}{data.symbol}</div>
                                </div>                               
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className= {`${data.symbol} fa-2x text-gray-300`} ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayDashboardData
