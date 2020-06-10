import React from 'react';

//TERNARY OPERATOR, conditional rendering with useState
export const SubMenu = (props) =>{
  return(
    <>
    <ul className={props.openSubMenu ? 'sub-menu-active' :'closed'}>
      <li>
          <a href="#whatIsReact">
              What is React
          </a>
      </li>
      <li>
          <a href="#reactivity">
              About reactivity
          </a>
      </li>
      <li>
          <a href="#getStarted">
              Get started
          </a>
      </li>
      <li>
          <a href="#folderStructureTour">
              Folder structure
          </a>
      </li>
      <li>
          <a href="#functionalComponents">
              Functional components
          </a>
      </li>
      <li>
          <a href="#hooks">
              Hooks
          </a>
      </li>
      <li>
          <a href="#productionBuild">
              Production build
          </a>
      </li>
  </ul>

  <ul className={props.openSubMenu ? 'sub-menu-active-mobile' :'closed'}>
      <li>
          <a href="#whatIsReact">
              What is React
          </a>
      </li>
      <li>
          <a href="#reactivity">
              About reactivity
          </a>
      </li>
      <li>
          <a href="#getStarted">
              Get started
          </a>
      </li>
      <li>
          <a href="#folderStructureTour">
              Folder structure
          </a>
      </li>
      <li>
          <a href="#functionalComponents">
              Functional components
          </a>
      </li>
      <li>
          <a href="#hooks">
              Hooks
          </a>
      </li>
      <li>
          <a href="#productionBuild">
              Production build
          </a>
      </li>
  </ul>

  </>
  

  );

}