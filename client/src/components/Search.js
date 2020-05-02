// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Search() {
//     const [search, setSearch] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [city, setCity] = useState([]);

//     const handleChange = e => {
//         setSearch({ ...search, [e.target.name]: e.target.value ? e.target.value : undefined });
//     };

//     const API_URL = 'https://api.openbrewerydb.org/breweries'
//     const handleSubmit = e => {
//         e.preventDefault();
//         setLoading(true);
//         axios.get(`${API_URL}?by_city=${search.city}`)
//         .then(res => {
//             console.log("City Search Res", res)
//             setCity(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//             setLoading(false);
//         })
//     }

//     return (
//         <div className="search-container">
//             <h3>Search For Brewery</h3>
//             <form className="search-form" onSubmit={handleSubmit}>
//                 <div>
//                     <label>City</label>
//                     <input type="text" name="city" placeholder="Search City" value={search.city} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>State</label>
//                     <input type="text" name="state" placeholder="Search State" value={search.state} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>Name</label>
//                     <input type="text" name="name" placeholder="Search Name" value={search.name} onChange={handleChange}/>
//                 </div>
//                 <button>Search</button>
//             </form>
//         </div>
//     )
// }
