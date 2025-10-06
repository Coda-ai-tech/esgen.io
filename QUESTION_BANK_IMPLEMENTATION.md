# ESG Question Bank Implementation

## Overview
The ESG assessment now uses a comprehensive question bank with **42 questions** across Environmental, Social, and Governance categories. Each assessment randomly selects **15 questions** to keep the experience fresh and engaging.

## Question Bank Structure

### Total Questions: 42
- **Environmental (A1-A3)**: 16 questions
  - A1: Environmental Policy (7 questions)
  - A2: Energy and Emissions (5 questions)
  - A3: Resource Management (4 questions)

- **Social (B1-B3)**: 18 questions
  - B1: Employment and Labor (8 questions)
  - B2: Health and Safety (7 questions)
  - B3: Product Responsibility (4 questions)

- **Governance (C1)**: 7 questions
  - C1: Corporate Governance, Ethics, and Compliance (7 questions)

### Random Selection Per Assessment
- **6 Environmental questions** (from 16 available)
- **6 Social questions** (from 18 available)
- **3 Governance questions** (from 7 available)
- **Total: 15 questions per assessment**

## Key Features

### 1. Random Question Selection
Each assessment generates a unique set of questions, ensuring:
- Fresh experience for repeat users
- Broad coverage of ESG topics over multiple assessments
- Reduced survey fatigue

### 2. Question Types
- **Radio**: Yes/No questions
- **Textarea**: Open-ended responses
- **Text**: Short text inputs
- **Checkbox**: Multiple selections
- **Attachment**: Document uploads (for certificates, policies, etc.)

### 3. Scoring System (CEPAR Framework)
Each question has a **weight** (1-10) based on:
- **Impact Materiality**: How the ESG challenge impacts society/environment
- **Financial Materiality**: How it affects company revenue/costs/viability
- **Compliance Requirements**: Regulatory and certification importance

High-weight questions (8-10):
- Environmental policies and certifications
- Health and safety programs
- Corporate governance and ethics
- Work-related injuries/fatalities

### 4. Bilingual Support
All questions available in:
- English
- Traditional Chinese (繁體中文)

## File Structure

```
src/
├── data/
│   ├── esgQuestionBank.ts      # 42-question comprehensive bank
│   └── esgQuestions.ts          # Legacy 15-question fixed set
├── lib/
│   └── questionSelector.ts      # Random selection & conversion utilities
└── app/
    └── generate/
        └── page.tsx             # Assessment page using random questions
```

## Implementation Details

### Question Bank (`esgQuestionBank.ts`)
```typescript
export interface ESGQuestion {
  id: string;              // e.g., 'A1-1', 'B2-25'
  section: string;         // e.g., 'A1', 'B2', 'C1'
  category: QuestionCategory;  // environmental | social | governance
  type: QuestionType;      // radio | textarea | checkbox | text | attachment
  question: string;        // English question
  questionZh: string;      // Chinese question
  options?: string[];      // Answer options (if applicable)
  optionsZh?: string[];    // Chinese answer options
  weight: number;          // Scoring weight (1-10)
  requiresAttachment?: boolean;
  remark?: string;         // Additional context/guidance
}
```

### Random Selection Function
```typescript
selectRandomQuestions({
  environmental: 6,
  social: 6,
  governance: 3
})
```

### Usage in Components
```typescript
// Generate random assessment
const esgQuestions = useMemo(() => generateRandomAssessment(), []);

// Or get all questions
const allQuestions = getAllQuestions();

// Or custom counts
const customAssessment = generateCustomAssessment({
  environmental: 10,
  social: 8,
  governance: 5
});
```

## Question Examples

### Environmental
- "Does the company have a written environmental-related policy?"
- "Does the company quantify or calculate the carbon footprint?"
- "Does the company utilize energy-efficient equipment?"

### Social
- "Does the company have written employment policy or staff handbook?"
- "Does the company establish health and safety policy?"
- "Has there been any serious work-related injuries or illnesses?"

### Governance
- "Does the company establish a Code of Conduct?"
- "Does the company perform an annual financial audit?"
- "Does the company implement a whistleblowing system?"

## Future Enhancements

### AI Integration (Planned)
1. **Dynamic Follow-up Questions**
   - AI generates contextual follow-ups based on user answers
   - Example: If company has ISO 14001, ask about implementation challenges

2. **Industry-Specific Questions**
   - Detect company industry from initial questions
   - Prioritize relevant questions for that sector

3. **Smart Scoring**
   - AI evaluates open-ended responses
   - Provides detailed feedback and recommendations

4. **Adaptive Difficulty**
   - Start with basic questions
   - Progress to advanced based on maturity level

### Question Bank Expansion
- Add industry-specific question sets
- Include supply chain ESG questions
- Add stakeholder engagement questions
- Incorporate climate risk assessment questions

## Benefits

1. **For Users**
   - Fresh, engaging experience each time
   - Comprehensive ESG coverage over multiple assessments
   - Reduced repetition and survey fatigue

2. **For Your Business**
   - Rich data collection across all 42 ESG topics
   - Better understanding of client ESG maturity
   - Insights into industry trends and common gaps

3. **For Compliance**
   - Covers all major ESG frameworks (GRI, SASB, CEPAR)
   - Aligns with ISO standards (14001, 45001, 9001)
   - Supports HKEx ESG reporting requirements

## Data Source
Questions sourced from:
- `/public/qb1.docx` - CEPAR framework and scoring guidelines
- `/public/qb2.xlsx` - 42 comprehensive ESG questions

## Testing
To test the random selection:
1. Visit `/generate` page
2. Start assessment
3. Refresh page and start again
4. Notice different questions are presented each time

## Notes
- The original 15-question fixed set is preserved in `esgQuestions.ts` for backwards compatibility
- The chatbot can be updated to use the same random question system
- Question weights can be adjusted based on client feedback and regulatory changes

