const covid19ImpactEstimator = (data) => {
    let reportedCases = data.reportedCases
    return{
        impact:{
            currentlyInfected : reportedCases * 10,
            infectionsByRequestedTime: currentlyInfected * 512
            
        },
        severeImpact:{
            currentlyInfected: reportedCases * 50,
            infectionsByRequestedTime: currentlyInfected * 512
        }
    }
};

export default covid19ImpactEstimator;
