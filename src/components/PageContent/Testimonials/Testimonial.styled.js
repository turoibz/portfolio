import styled from "styled-components";

export const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 991px) and (min-width:768px){
    min-width: 50%;
  }
  @media (max-width: 767px) {
    min-width: 90%;
  }
  &:last-child{
    margin-right: 0;
  }
  padding: 2rem;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  background: ${({ theme }) => theme.color.offwhite};
  border: 1px solid ${({ theme }) => theme.color.skyblue};
`;

export const StyledQuote = styled.div`
  margin-bottom: 2rem;
`;

export const StyledCopy = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const StyledAuthor = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: .9rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;