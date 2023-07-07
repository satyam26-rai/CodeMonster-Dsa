import React from 'react';
import './topic.css';
import { Link } from 'react-router-dom';
import Array from './Array/array';
const  Topic=()=>{
    return(
        <div className='Topic_page' >
             
             <ul className="topic" type="none">

                <div className='series'> 
                <div className='series_line'>  <li className="topic-box"><Link to="/Basic">Basic</Link></li></div>
                <div className='series_line'> <li><Link to="/oops">Object-Oriented-Programing</Link></li></div>
                <div className='series_line'> <li><Link to="/Arrays">Arrays</Link></li></div>
                 
                </div>
                
                <div className='series'> 
                <div className='series_line'> <li><Link to="/String">String</Link></li></div>
                <div className='series_line'> <li><Link to="/Matrix">Matrix</Link></li></div>
                <div className='series_line'> <li><Link to="/Recursion">Recursion</Link></li></div>
                </div>

                <div className='series'> 
                <div className='series_line'> <li><Link to="/Linked-List">Linked List</Link></li></div>
                <div className='series_line'> <li><Link to="/Stack&Queue">Stack Queue</Link></li></div>
                <div className='series_line'> <li><Link to="/Trees">Trees</Link></li></div>
                </div>

                <div className='series'> 
                <div className='series_line'>  <li><Link to="/Heap">Heap</Link></li></div>
                <div className='series_line'> <li><Link to="/Sorting">Sorting</Link></li></div>
                <div className='series_line'> <li><Link to="/Hashing">Hashing</Link></li></div>
                </div>

                <div className='series'> 
                <div className='series_line'>  <li><Link to="/Graph">Graph</Link> </li></div>
                 </div>
            </ul>
        </div>

    )
}
export default  Topic;