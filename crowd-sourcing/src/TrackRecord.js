import React from 'react';
import HistoricalPerformance from './components/HistoricalPerformance';
import './App.css';

// Dummy data for the Historical Performance component, replace with real data

const performanceData = {
    completedDeals: 120,
    moneyDistributed: 5000000,
    totalInvested: 7000000,
    assetClasses: ['Real Estate', 'Stocks', 'Bonds'],
    investmentOverview: {
      labels: ['2020', '2021', '2022'],
      data: [2000000, 2500000, 2500000],
    },
  };

function TrackRecord() {
  return (
    <div className="App">
      <main className="App-main">
        <HistoricalPerformance performanceData={performanceData} />
        {/* Include any other content specific to this component */}
      </main>
    </div>
  );
}

export default TrackRecord;