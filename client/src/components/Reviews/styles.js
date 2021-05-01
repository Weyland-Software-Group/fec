import styled from 'styled-components';

const GrayFont = styled.div`
  color: #ccc;
`;

const SortByContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SortByLabel = styled.div`
  margin: 7px 3px 0 0;
`;

const SortBy = styled.select`
  display: flex;
  align-self: self-start;
  margin: 8px 0;
  font-size: .9em;
`;

const RecommendCheckboxContainer = styled.div`
  padding-left: 7px;
`;

const UtilityContainer = styled.div`
  display: block;
`;

const ReviewPost = styled.div`
  border-bottom: 1px solid gray;
  margin: 15px 0 6px 0;
  padding-bottom: 12px;
  width: 85%;
`;

const ReviewPostTopRow = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #423f3f;
`;

const StarRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20%;
`;

const ReviewPostStarRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`;

const StarContainer = styled.div`
  margin-right: 130px;
`;

const ReviewPostStarContainer = styled.div`
  margin-right: 130px;
  margin-left: 0px;
`;

const UsernameDate = styled.div`
  position: relative;
  left: 60%;
`;

const ReviewPostTitle = styled.h3`
  font-size: 1.15em;
`;

const ReviewPostBody = styled.div`
  color: #423f3f;
`;

const RecommendProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

const ReviewPostImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const ReviewPostImg = styled.img`
  width: 10%;
  margin-right: 5px;
`;

const ReviewPostBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #423f3f;
  margin: 10px 0 6px 0;
`;

const Helpful = styled.div`
  margin: 0 4px;
  text-decoration: underline;
`;

const A = styled.a`
  color: #423f3f;
  margin: 0 4px;
`;

const SellerResponse = styled.div`
  background-color: #a1e0a6;
  padding: 3px;
  margin-bottom: 3px;
`;

const StarsOuter = styled.div`
  font-size: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const StarsInner = styled.div`
  size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
`;

const StarsOuterBefore = styled.div`
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 200;
  }
  & {
    font-size: 12px;
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;

const StarsInnerBefore = styled.div`
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #000;
  }
  & {
    size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }
`;

const Styles = {
  GrayFont,
  SortBy,
  SortByContainer,
  SortByLabel,
  RecommendCheckboxContainer,
  RecommendProduct,
  ReviewPost,
  ReviewPostBody,
  ReviewPostBottomRow,
  ReviewPostImg,
  ReviewPostImgContainer,
  ReviewPostTitle,
  ReviewPostTopRow,
  A,
  Helpful,
  ReviewPostStarRatingContainer,
  ReviewPostStarContainer,
  StarContainer,
  StarRatingContainer,
  UsernameDate,
  UtilityContainer,
  SellerResponse,
  StarsInner,
  StarsOuter,
  StarsInnerBefore,
  StarsOuterBefore,
};

export default Styles;
