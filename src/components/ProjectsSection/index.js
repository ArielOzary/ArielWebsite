import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SubtitleWrap,
  ImgWrap,
  Img,
  SubtitleHeader,
  AllSubtitlesWrap,
} from "./ProjectsElements";
import { Button } from "../ButtonElements";

const ProjectsSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  imgPath,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper></TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>

              <AllSubtitlesWrap>
                <SubtitleWrap>
                  <SubtitleHeader
                    onClick={() =>
                      handleButtonClick(
                        "https://github.com/ArielOzary/Presentation",
                      )
                    }
                    darkText={darkText}
                  >
                    Freight Management Platform
                  </SubtitleHeader>
                  <Subtitle darkText={darkText}>
                    A robust web platform empowering importers/exporters to
                    streamline freight management. Technologies: Microservices,
                    AWS ECS SES S3, .NET 7, Microsoft.Identity, ReactTS, GH
                    Actions, RabbitMQ.
                  </Subtitle>
                </SubtitleWrap>

                <SubtitleWrap>
                  <SubtitleHeader
                    onClick={() =>
                      handleButtonClick("https://github.com/Arielegend/Ariel")
                    }
                    darkText={darkText}
                  >
                    This website
                  </SubtitleHeader>
                  <Subtitle darkText={darkText}>
                    {" "}
                    Personal website built on React.js. Hosted on AWS using the
                    Amplify library for seamless deployment.
                  </Subtitle>
                </SubtitleWrap>

                <SubtitleWrap>
                  <SubtitleHeader
                    onClick={() =>
                      handleButtonClick("https://github.com/Arielegend/Banking")
                    }
                    darkText={darkText}
                  >
                    Dynamic Banking System
                  </SubtitleHeader>
                  <Subtitle darkText={darkText}>
                    .NET application extracting parameters from diverse schemas
                    at runtime for a flexible banking experience.
                  </Subtitle>
                </SubtitleWrap>

                <SubtitleWrap>
                  <SubtitleHeader
                    onClick={() =>
                      handleButtonClick(
                        "https://github.com/Arielegend/couponlightdb",
                      )
                    }
                    darkText={darkText}
                  >
                    Coupons
                  </SubtitleHeader>
                  <Subtitle darkText={darkText}>
                    Coupon generator service using AWS DynamoDB Light Container.
                    written with Python.
                  </Subtitle>
                </SubtitleWrap>

                <SubtitleWrap>
                  <SubtitleHeader
                    onClick={() =>
                      handleButtonClick(
                        "https://github.com/Arielegend/BankCompleteBack",
                      )
                    }
                    darkText={darkText}
                  >
                    Transactional Banking Hub
                  </SubtitleHeader>
                  <Subtitle darkText={darkText}>
                    .NET and React.js application facilitating multiple clients
                    in seamless transaction requests, both front and back-end.
                    (Front at BankCompleteFront repo)
                  </Subtitle>
                </SubtitleWrap>
              </AllSubtitlesWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgPath} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ProjectsSection;
