import { useState } from 'react';
import Skill from '../UI/Skill';

export default function Skills(props) {
  const [count, setCount] = useState(1);

  const skillsList = [];
  for (let i = 0; i < count; i++) {
    skillsList.push(<Skill />);
  }

  function handleAddNewSkill() {
    setCount((oldCount) => oldCount + 1);
  }

  return (
    <div>
      <header>
        <h3>Skills</h3>
        {/* <FontAwesomeIcon
          icon={faPlus}
          className="icon"
          onClick={handleAddNewSkill}
        /> */}
      </header>
      {skillsList}
    </div>
  );
}

// const SkillsWrapper = styled.div`
//   header {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     margin-top: 2rem;
//     margin-bottom: 1rem;
//   }

//   .icon {
//     cursor: pointer;
//     color: ${({ theme }) => theme.colors['dark-200']};
//     transition: 0.2s ease-in-out;
//   }

//   .icon:hover {
//     color: ${({ theme }) => theme.colors['dark-300']};
//   }

//   h3 {
//     font-size: 1.6rem;
//   }
// `;
