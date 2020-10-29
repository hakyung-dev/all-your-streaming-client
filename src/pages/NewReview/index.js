import React, { useState } from 'react';

import Search from './Search';
import ReviewForm from './ReviewForm';
import NeedLogin from '../../components/NeedLogin';

const NewReview = (props) => {
  const { signInUser } = props;
  const [selectedContent, setSelectedContent] = useState(null);

  const handleChoice = (content) => {
    setSelectedContent({ ...content });
  };

  return (
    <>
      <section>
        <div className={`container bg-new-review page-top`}>
          <h1 className={`page-top-title`}>New Review</h1>
          새로운 리뷰를 작성해보세요!
        </div>
      </section>
      <section className="bg-skyblue">
        <Search handleChoice={handleChoice} />
      </section>
      <section className="bg-grey">
        <div className="container">
          <div className="sub-top">
            <div className="title">Add Review</div>
            <div className="description">리뷰를 완성하세요.</div>
          </div>
          <div className="sub-body">
            {!signInUser ? (
              <NeedLogin
                description1={`리뷰를 작성하여 기록을 남길 수 있습니다.`}
                description2={`리뷰를 관리해보세요!`}
              />
            ) : (
              <ReviewForm
                {...props}
                selectedDate={props.location.state}
                selectedContent={selectedContent}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewReview;
