import * as React from 'react';

export default function Business({businessData}) {
    return (<div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{businessData?.name}</h5>

                        <div>Address: {businessData?.address}</div>
                        <div>Excerpt: {businessData?.excerpt}</div>
                        <div>Reviewer Name: {businessData?.reviewer_name}</div>

                    </div>
                </div>
            </div>);
}