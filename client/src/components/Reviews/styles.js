import styled from 'styled-components';

const Reviews = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-top: 75px;
  padding: 0 5%;
`;

const ReviewsCol1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  margin: 15px;
  justify-content: center;
  align-items: center;
`;

const ReviewsCol2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20% 0 0 5%;
  justify-content: flex-start;
`;

// const  = styled.div`

// `;

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

const StarRatingHeader = styled.div`
  font-size: 44px;
  font-weight: 900;
`;

const StarRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 17%;
`;

const ReviewPostStarRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`;

const StarContainer = styled.div`
  margin: 10px 130px 0 0;
`;

const ReviewPostStarContainer = styled.div`
  margin-right: 130px;
  margin-left: 0px;
`;

const UsernameDate = styled.div`
  position: relative;
  left: 32%;
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

const StarReviewScaleInner = styled.div`
  & {
  background: #2ada71;
  height: 8px;
  border-radius: 2px;
  top: 0;
  left: 0;
  position: absolute;
  }
`;

const RatingsDescription = styled.ul`
  font-size: 12px;
  position: absolute;
  left: 68%;
  top: 32%;
  width: 65%;
  text-decoration: none;
`;

const IndividualRatings = styled.div`
 & {
    width: 86%;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin: 3px 0;
  }
  &:hover {
    border: 1px solid #2ada71;
  }
`;

const RatingsPopUp = styled.div`
  position: relative;
  margin-right: 3px;
  text-decoration: underline;
`;

const StarReviewScale = styled.div`
  background: #ccc;
  height: 8px;
  width: 180px;
  border-radius: 2px;
  margin-top: 6px;
  position: relative;
`;

const TotalStarRatings = styled.div`
  position: relative;
  left: 3px;
  text-decoration: underline;
`;

const SizeComfortScale = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  position: relative;
`;

const SizeComfortContainer = styled.div`
  position: relative;
  width: 80%;
`;

const SizeComfortHeading = styled.span`
  margin-left: 3px;
`;

const SizeComfort = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0 10px 0;
  width: 100%;
`;

const SizeComfortSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1px;
`;

const SizeComfortBox = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 8px;
  margin: 0 2px;
  border-radius: 2px;
`;

const Small = styled.small`
  display: block;
  margin: 4px 0 0 4px;
`;

const ReviewButton = styled.button`
  background: none;
  height: 40px;
  border: 1.5px solid #252222;
  color: #252222;
  width: 100%;
  margin: 0 5%;
  font-size: .8em;
`;

const ReviewsButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-evenly;
    align-items: center;
    width: 35%;
`;

const Form = styled.form`
  position: absolute;
  top: 120%;
  left: 20%;
  width: 60%;
  height: 70%;
  z-index: 900;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  border: 1px solid #000;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

const ExitForm = styled.button`
  display: flex;
  align-self: flex-end;
`;

const WriteReviewHeading = styled.div`
  margin: 8px 0;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: .03em;
  font-size: 1.6em;
`;

const FormInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 85%;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const FormLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 12px 6px 0;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: .03em;
`;

const SubmitForm = styled.input`
  background-color: #000;
  color: #fff;
  width: 110px;
  height: 35px;
  margin: 30px 10px 0 0;
  display: flex;
  align-self: center;
  justify-content: center;
  border: 2px solid #2ada71;
  padding: 5px;
`;

const RadioButtonRow = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  flex-direction: row;
`;

const RadioButtonLabel = styled.label`
  display: block;
  font-family: helvetica;
  font-size: 12px;
  margin: 8px 5px 0 8px;
`;

const RecommendInput = styled.input`
  display: block;
`;

const FormRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 12px 6px 0;
  flex-direction: column;
`;

const FormStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-bottom: 55px;
`;

const FormStarsHeader = styled.div`
  margin-right: 6px;
`;

const FormStarsOuter = styled.div`
  &before: {
    content: "\f005";
    font-family: 'Font Awesome 5 Free';
  }
  & {
    margin-top: 1px;
    font-size: 16px;
    position: relative;
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }
`;

const FormStarsInner = styled.div`
  &before: {
    content: "\f005";
    font-family: 'Font Awesome 5 Free';
    color: #000;
  }
  & {
    margin-top: 1px;
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const ProductCharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const ProductCharacteristicsRadio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  width: 20%;
`;

const ProductCharacteristicsHeader = styled.h4`
  display: block;
  text-align: center;
`;

const TextInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px 12px 6px 0;
  text-align: center;
  font-family: "Bebas Neue", cursive;
  letter-spacing: .03em;
`;

const TextInputs = styled.input`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 8px 0;
`;

const PhotoSelectButton = styled.button`
  background-color: #2ada71;
  color: #fff;
  width: 100px;
  height: 30px;
  margin: 6px 0 3px 0;
`;

const ErrorMessage = styled.h4`
  font-size: 18px;
  text-align: center;
`;

const FormCover = styled.div`
  height: 3500px;
  width: 2400px;
  background-color: #000;
  opacity: .7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const ReviewBody = styled.div`
  height: 150%;
`;

const NewReviewHeader = styled.h4`
  dipslay: block;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: .03em;
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
  StarReviewScale,
  StarReviewScaleInner,
  StarRatingHeader,
  TotalStarRatings,
  IndividualRatings,
  RatingsPopUp,
  Small,
  SizeComfort,
  SizeComfortSubContainer,
  SizeComfortBox,
  SizeComfortContainer,
  SizeComfortHeading,
  SizeComfortScale,
  ReviewButton,
  ReviewsButtonRow,
  Reviews,
  ReviewsCol1,
  ReviewsCol2,
  Form,
  ExitForm,
  WriteReviewHeading,
  FormInputContainer,
  FormRow,
  SubmitForm,
  RadioButtonRow,
  RadioButtonLabel,
  RecommendInput,
  FormRatingContainer,
  FormStarsHeader,
  FormStarsOuter,
  FormStarsInner,
  ProductCharacteristicsContainer,
  ProductCharacteristicsRadio,
  ProductCharacteristicsHeader,
  TextInputLabel,
  TextInputs,
  PhotoSelectButton,
  ErrorMessage,
  FormCover,
  ReviewBody,
  RatingsDescription,
  NewReviewHeader,
  FormLabel,
  FormStarsContainer,
};

export default Styles;
