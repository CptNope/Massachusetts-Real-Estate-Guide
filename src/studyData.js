// Flashcards for exam prep
export const flashcards = [
  {
    id: 'fc1',
    category: 'Contract Flow',
    question: 'What must happen before a buyer can submit their first written offer in MA (2025)?',
    answer: 'The buyer must receive the Mandatory Home Inspection Disclosure before submitting the first written offer.',
    difficulty: 'medium'
  },
  {
    id: 'fc2',
    category: 'Contract Flow',
    question: 'What happens when a seller makes a counter-offer?',
    answer: 'A counter-offer acts as a rejection of the prior offer and creates a new offer. The original offer is no longer valid.',
    difficulty: 'easy'
  },
  {
    id: 'fc3',
    category: '2025 Law Changes',
    question: 'Can sellers or listing agents require buyers to waive home inspections in MA?',
    answer: 'No. As of October 2025, sellers and listing agents cannot require buyers to waive home inspections.',
    difficulty: 'easy'
  },
  {
    id: 'fc4',
    category: '2025 Law Changes',
    question: 'What can still be negotiated regarding home inspections under the new 2025 rules?',
    answer: 'Inspection deadline, repair thresholds, deposit handling if terminated after inspection, and limiting negotiations to structural/major mechanical defects.',
    difficulty: 'hard'
  },
  {
    id: 'fc5',
    category: 'Commission',
    question: 'Who typically pays the buyer-agent commission?',
    answer: 'While traditionally paid by the seller, as of 2025 this is fully negotiable. Buyers may pay their own agent directly, or it can be negotiated into the transaction.',
    difficulty: 'medium'
  },
  {
    id: 'fc6',
    category: 'Broker Relationship',
    question: 'What is the key difference between an independent contractor and an employee in real estate?',
    answer: 'Independent contractors control their own schedule, pay their own taxes, and receive a 1099. Employees have taxes withheld, follow set hours, and receive a W-2.',
    difficulty: 'medium'
  },
  {
    id: 'fc7',
    category: 'Contract Flow',
    question: 'What is the typical deposit amount at the P&S stage?',
    answer: 'The deposit at the Purchase & Sale Agreement stage is typically 3-5% of the purchase price.',
    difficulty: 'easy'
  },
  {
    id: 'fc8',
    category: 'Dual Agency',
    question: 'What must happen for dual agency to be valid in Massachusetts?',
    answer: 'Both buyer and seller must provide written informed consent. The agent must disclose the dual agency relationship before any confidential information is shared.',
    difficulty: 'hard'
  },
  {
    id: 'fc9',
    category: 'Commission',
    question: 'What are common commission split structures for new agents?',
    answer: 'Common structures include 50/50 split, 60/40 split (agent gets 60%), graduated splits that increase with production, or splits with monthly caps.',
    difficulty: 'medium'
  },
  {
    id: 'fc10',
    category: 'Broker Relationship',
    question: 'What does Chapter 112, §87AAA½ govern?',
    answer: 'It governs the broker-agent relationship, including duties, supervision requirements, and independent contractor status regulations.',
    difficulty: 'hard'
  }
];

// Multiple choice quiz questions
export const quizQuestions = [
  {
    id: 'q1',
    category: 'Contract Flow',
    question: 'When does an Offer to Purchase become binding?',
    options: [
      'When the buyer signs it',
      'When it is delivered to the seller',
      'When it is signed and delivered',
      'When the P&S is signed'
    ],
    correctIndex: 2,
    explanation: 'An Offer to Purchase becomes binding when it is both signed AND delivered to the other party.'
  },
  {
    id: 'q2',
    category: '2025 Law Changes',
    question: 'Under the 2025 MA inspection rules, which of the following is NOT allowed?',
    options: [
      'Requiring buyers to waive home inspections',
      'Setting a short inspection deadline',
      'Limiting repairs to structural issues only',
      'Setting a minimum repair threshold amount'
    ],
    correctIndex: 0,
    explanation: 'Sellers and listing agents cannot require buyers to waive home inspections as of October 2025. However, they can still negotiate deadlines, thresholds, and scope.'
  },
  {
    id: 'q3',
    category: 'Commission',
    question: 'What is the 2025 rule regarding buyer-agent commissions in Massachusetts?',
    options: [
      'Sellers must always pay buyer-agent commission',
      'Buyers must always pay their own agent',
      'Commissions are explicitly treated as fully negotiable',
      'The state sets a standard commission rate'
    ],
    correctIndex: 2,
    explanation: 'As of 2025, commissions are explicitly treated as fully negotiable between all parties. There is no requirement for who pays.'
  },
  {
    id: 'q4',
    category: 'Dual Agency',
    question: 'What is required before an agent can act as a dual agent in MA?',
    options: [
      'Verbal consent from both parties',
      'Written informed consent from both parties',
      'Approval from the broker only',
      'Filing with the state board'
    ],
    correctIndex: 1,
    explanation: 'Both buyer and seller must provide written informed consent before dual agency can occur. The relationship must be disclosed before confidential information is shared.'
  },
  {
    id: 'q5',
    category: 'Broker Relationship',
    question: 'Which is NOT a characteristic of an independent contractor agent?',
    options: [
      'Controls their own schedule',
      'Receives a W-2 tax form',
      'Pays their own taxes',
      'Is not entitled to employee benefits'
    ],
    correctIndex: 1,
    explanation: 'Independent contractors receive a 1099 form, not a W-2. W-2 forms are for employees who have taxes withheld by their employer.'
  },
  {
    id: 'q6',
    category: 'Contract Flow',
    question: 'What is the typical deposit amount at the Offer to Purchase stage?',
    options: [
      '10% of purchase price',
      '5% of purchase price',
      '$500-$1,000',
      '3% of purchase price'
    ],
    correctIndex: 2,
    explanation: 'The initial deposit with an Offer to Purchase is typically $500-$1,000. The larger deposit (3-5%) comes at the P&S stage.'
  },
  {
    id: 'q7',
    category: 'Commission',
    question: 'In a 70/30 commission split with a $10,000 gross commission, how much does the agent receive?',
    options: [
      '$3,000',
      '$7,000',
      '$5,000',
      '$10,000'
    ],
    correctIndex: 1,
    explanation: 'In a 70/30 split where the agent gets 70%, they receive $7,000 (70% of $10,000). The broker retains $3,000.'
  },
  {
    id: 'q8',
    category: '2025 Law Changes',
    question: 'What is a Backup Offer Addendum used for?',
    options: [
      'To submit multiple offers simultaneously',
      'To position as second in line if the first deal falls through',
      'To replace an existing offer',
      'To extend the closing date'
    ],
    correctIndex: 1,
    explanation: 'A Backup Offer Addendum allows a buyer to position themselves as second in line if the primary accepted offer falls through.'
  },
  {
    id: 'q9',
    category: 'Broker Relationship',
    question: 'What happens when an agent reaches their "cap" in a capped commission structure?',
    options: [
      'They must stop working for the month',
      'They keep 100% of commissions after that point',
      'Their split percentage decreases',
      'They receive a bonus from the broker'
    ],
    correctIndex: 1,
    explanation: 'Once an agent reaches their cap (the maximum amount paid to the broker), they typically keep 100% of subsequent commissions for that period.'
  },
  {
    id: 'q10',
    category: 'Dual Agency',
    question: 'In a designated dual agency, what happens?',
    options: [
      'One agent represents both parties',
      'Two agents from the same brokerage each represent one party',
      'The broker represents both parties',
      'No representation is provided'
    ],
    correctIndex: 1,
    explanation: 'In designated dual agency, two different agents from the same brokerage each represent one party, reducing conflicts while keeping the transaction in-house.'
  }
];
