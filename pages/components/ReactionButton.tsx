import React, { useState } from 'react';

interface ReactionButtonProps {
  emoji: string;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ emoji }) => {
  const [count, setCount] = useState(0);

  const handleReactionClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleReactionClick}>
      {emoji} {count}
    </button>
  );
};

export default ReactionButton;
