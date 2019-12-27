export class Accounting {
  _id: {};
  officeRates: { type: Number };
  draftingRat: { type: Number };
  engineeringRate: { type: Number };
  surveyingRate: { type: Number };
  fieldCrewRate: { type: Number };
  inspectionRate: { type: Number };
  employees: [ {
    name: { type: string },
    salary: { type: Number }
  } ];
}
