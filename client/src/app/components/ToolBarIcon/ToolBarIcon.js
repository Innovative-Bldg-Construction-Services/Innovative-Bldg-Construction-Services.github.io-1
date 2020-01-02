import React, {useState} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'
import {Link} from 'react-router-dom';

const ToolBarIcon = ({toolData}) => {

  const [icon, setIcon] = useState(toolData.icon)

  const toggleIcon = (event, toolData) => {
    const iconTag = $(event.target).find('i').addBack('i')
    const currentIcon = iconTag && iconTag[0] && iconTag[0].innerHTML
    if (currentIcon === toolData.icon) {
      setIcon(toolData.iconHovered)
    } else {
      setIcon(toolData.icon)
    }
  }

  return (
    <li id={toolData.id} className="c-ToolBarIcon nav-item" onClick={toolData.clickHandler}>
      <Link to="#" className="nav-link">
        <i 
          className="material-icons orange600 md-36" 
          onMouseEnter={(event) => toggleIcon(event, toolData)}
          onMouseLeave={(event) => toggleIcon(event, toolData)}>
          {icon}
        </i>
      </Link>
    </li>
  );
};

ToolBarIcon.propTypes = {
  toolData: PropTypes.object
};

export default ToolBarIcon;