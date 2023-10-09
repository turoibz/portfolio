import React, { useEffect, useState } from "react";
import { useHeadsObserver } from './hook';
import { StyledTableContent, StyledTableTitle, StyledTableList, StyledTableListItem, StyledContentLink } from "./TableContent.styled"

export function TableContent(){
  const [headings, setHeadings] = useState([]);
  const {activeId} = useHeadsObserver();
  const getClassName = (level) => {
    switch (level) {
      case 2:
        return 'head2'
      case 3:
        return 'head3'
      case 4:
        return 'head4'
      default:
        return null
    }
  }
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .map((elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1))
      }))
    setHeadings(elements)
  }, [])
  
  return(
    <StyledTableContent>
      <StyledTableTitle>
        Project Contents
      </StyledTableTitle>
      <StyledTableList>
        {headings.map(heading => (
          <StyledTableListItem key={heading.text} className={getClassName(heading.level)}>
            <StyledContentLink
              className={activeId === heading.id ? "active" : "" } 
              href='#'
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth"
                })}}
              >
                {heading.text}
            </StyledContentLink>
          </StyledTableListItem>
        ))}
      </StyledTableList>
    </StyledTableContent>
  )
}