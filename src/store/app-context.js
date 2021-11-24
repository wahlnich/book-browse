import React from 'react';

const AppContext = React.createContext({
  data: [
    {
      title: 'Priory of the Orange Tree',
      author: 'Samantha Shannon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Viverra nam libero justo laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit. Id volutpat lacus laoreet non curabitur gravida. Imperdiet dui accumsan sit amet nulla facilisi. Tristique senectus et netus et malesuada fames ac. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Risus pretium quam vulputate dignissim. Pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Euismod lacinia at quis risus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
      isbn: '978-1635570298',
    },
    {
      title: 'Stormlight Archive',
      author: 'Brandon Sanderson',
      description: `These glowy dudes with depression, man. They're flying, they're lashing, they're creating diagrams. In the name of Honor, of course.`,
      isbn: '978-0-7653-2635-5',
    },
    {
      title: 'The Cloud Roads',
      author: 'Martha Wells',
      description: `Awesome flying shapeshifting monster/human hybrids. Reverse gender roles brah!`,
      isbn: '978-1949102185',
    },
    {
      title: 'Wheel of Time',
      author: 'Robert Jordan',
      description: 'wheel of time',
      isbn: '9780312850098',
    },
    {
      title: 'Underlord',
      author: 'Will Wight',
      description:
        'A tournament approaches. All around the world, great clans and sects prepare their disciples to fight against one another in a competition of young Underlords. Even the Blackflame Empire is drawn in, but their youth are not strong enough to compete. \\nYet.',
      isbn: '9780999851128',
    },
    {
      title: 'Soulsmith',
      author: 'Will Wight',
      description: `Outside Sacred Valley, ancient ruins rise from the earth, drawing sacred artists from miles around to fight for the treasures within.
    
          Lindon has reached Copper, taking the first step on the road to power, but the warriors of the outside world are still far beyond him.
          
          To advance, he turns to the arcane skills of the Soulsmiths, who craft weapons from the stuff of souls. With new powers come new enemies, and Lindon soon finds himself facing an entire sect of Golds.`,
      isbn: '9780989671774',
    },
  ],
});

export default AppContext;
