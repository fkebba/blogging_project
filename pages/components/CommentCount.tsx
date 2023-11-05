// components/CommentCount.tsx

import React from 'react';
// import styled from 'styled-components';

interface CommentCountProps {
  count: number;
}

// const CountContainer = styled.div`
//   font-size: 18px;
//   color: #333;
// `;

const CommentCount: React.FC<CommentCountProps> = ({ count }) => {
  return <div>{count} Comments</div>;
};

export default CommentCount;
