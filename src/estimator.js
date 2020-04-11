const covid19ImpactEstimator = (data) => {
    const {reportedCases} = data;
    return {
        impact:{
          currentlyInfected : reportedCases * 10,
          infectionsByRequestedTime: this.currentlyInfected * 512
            
        },
        severeImpact:{
          currentlyInfected: reportedCases * 50,
          infectionsByRequestedTime: this.currentlyInfected * 512
        }
    }
};

export default covid19ImpactEstimator;
