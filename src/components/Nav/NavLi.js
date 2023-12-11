import React from 'react';
import { Animated } from 'react-animated-css';
import './Nav.module.scss';

export default function NavLi( {href, className, value, dimensions, fontGt, fontLt} ) {
    console.log(`dimensions.width: ${dimensions.width}`);
    
    return (
        <div className="frosted">
            
            <li>
                <a 
                    href={href} 
                    className={`${className}`}
                    style={{
                        fontSize: dimensions.width > 860 ? fontGt : fontLt
                    }}
                > 
                    {value}
                </a>
            </li>
            
        </div>
    )
};