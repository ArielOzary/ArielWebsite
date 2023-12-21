import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #5a5a5a;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    //padding-top: 450px
  }
`;

export const ContactTitle = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #097959;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

export const IconWrapperLinkedIn = styled.div`
  display: flex;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #097959;
  }
  padding: 24px;
`;

export const IconWrapperGmail = styled.div`
  display: flex;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: red;
  }
  padding: 24px;
`;

export const ContactSocial = styled.div``;
export const ContactEmail = styled.div``;
export const ContactSocialItem = styled.div``;
