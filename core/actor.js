class Actor {
  constructor(fName, lName, Age, Gender, Relationship, financialStatus) {
      this.fName = fName;
      this.lName = lName;
      this.Age = Age;
      this.Gender = Gender;
      this.Relationship = Relationship;
      this.financialStatus = financialStatus;
  }

  ageUp() {
      this.Age ++;
  }
}
