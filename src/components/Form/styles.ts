import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  width: 100%;
  height: fit-content;
  padding: 120px 0;
  justify-content: center;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
`;

export const ContentFormulario = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 1394px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h1 {
    text-align: center;
    font-size: 66px;
    line-height: 66px;
    font-weight: 700;
    color: #fff;
  }

  p {
    text-align: center;
    font-size: 23px;
    font-weight: 400;
    color: #fff;
    line-height: 32px;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1750px) {
    max-width: 965px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  max-width: 650px;
  gap: 20px;
  @media (max-width: 900px) {
    align-items: center;

    margin-bottom: 50px;
  }

  label {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }

  input {
    width: 100%;
    height: 44px;
    border: 1px solid #979797;
    border-radius: 4px;
    font-size: 18px;
    background: #fff;
    color: #000;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }

  .formItem {
    width: 100%;
    border-radius: inherit;
    display: flex;
    flex-flow: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: fit-content;
  background-color: #007505;
  font-size: 22px;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
  border-radius: 300px;
  border: none;
  padding: 13px 0;
  color: #fff;
  cursor: pointer;
`;

export const DividerForm = styled.div`
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Divider = styled.div`
  margin: 50px;
  img {
    width: 100%;
  }
`;
