import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSideNav.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/news-category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    const active = {
        color: "blue",
        textDecoration: "underline",
        
    }



    return (
        <div>
            
            
             
             <h4><Badge bg="info">Total category :  {categories.length}</Badge></h4>
           
            <hr />
            {
                categories.map(category => <div key={category.id}>

                    <NavLink 
                     className="nav-style"
                      style={({isActive}) => isActive ? active : undefined}

               
                        to={`/category/${category.id}`}>{category.name}

                    </NavLink>

                </div>)
            }

        </div>
    );
};

export default LeftSideNav;