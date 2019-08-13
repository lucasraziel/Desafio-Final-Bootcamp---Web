import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 100px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    .react-datepicker-wrapper {
      display: block !important;
    }
    .react-datepicker__input-container {
      display: block !important;
      input {
        width: 100%;
      }
    }

    div.buttonSubmit {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 28px;
        padding: 0 20px;
        height: 44px;
        background: #f94d6a;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }
      }
    }
  }
`;
