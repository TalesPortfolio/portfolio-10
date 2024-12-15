"use client";
import styled from "styled-components";

export const TeamContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
 /* Fundo escuro semi-transparente */
  color: #fff;
    padding-top: 100px;
    padding-bottom: 300px;
  h2 {
    font-size: 3rem;
    color: #00ffff;
    margin-bottom: 2rem;
  }
`;

export const TeamContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const MemberCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #00ffff;
  border-radius: 8px;
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  h3 {
    margin: 1rem 0 0.5rem;
    color: #00ffff;
  }

  p {
    font-size: 0.9rem;
    color: #ddd;
    font-weight: bold;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: #00ffff;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #00cccc;
    }
  }
`;
