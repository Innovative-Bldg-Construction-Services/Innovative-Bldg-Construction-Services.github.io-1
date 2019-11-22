import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ToolBarIcon from './../ToolBarIcon'

const ToolBar = props => {

  const [tools, setTools] = useState([
    {
      id: 'btnFavorites',
      icon: 'info_outlined',
      iconHovered: 'info'
    },
    {
      id: 'btnClearCommand',
      icon: 'delete_outline',
      iconHovered: 'delete'
    },
    {
      id: 'btnFireCommand',
      icon: 'send',
      iconHovered: 'send'
    },
    {
      id: 'btnSTTCommand',
      icon: 'chat_bubble_outline',
      iconHovered: 'chat_bubble'
    }
  ])

  const toolItems = tools && tools.map((toolData, index) => {
    return <ToolBarIcon toolData={toolData} key={index} />
  })

  return (
    <ul className='c-ToolBar'>
      {toolItems}
    </ul>
  );
};

ToolBar.defaultProps = {

};

ToolBar.propTypes = {

};

export default ToolBar;