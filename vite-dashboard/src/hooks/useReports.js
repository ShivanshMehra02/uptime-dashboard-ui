import { useState, useEffect, useCallback } from 'react';
import { getStoredReports, saveReports, initialReports } from '../data/mockData';

export const useReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    const storedReports = getStoredReports();
    setReports(storedReports);
    if (storedReports.length > 0) setSelectedReportId(storedReports[0].id);
  }, []);

  useEffect(() => {
    if (reports.length > 0) saveReports(reports);
  }, [reports]);

  const filteredReports = reports.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const selectedReport = reports.find((r) => r.id === selectedReportId) || null;

  const addReport = useCallback((title, subtitle) => {
    const newReport = {
      id: Date.now(),
      title,
      subtitle,
      metrics: {
        openAlerts: Math.floor(Math.random() * 50) + 5,
        closingRate: Math.floor(Math.random() * 40) + 50,
        oldestAlert: Math.floor(Math.random() * 100) + 10,
      },
      barChartData: {
        labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
        inProcess: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 5),
        unacknowledged: Array.from({ length: 6 }, () => Math.floor(Math.random() * 25) + 3),
        onWatch: Array.from({ length: 6 }, () => Math.floor(Math.random() * 20) + 2),
      },
      donutChartData: {
        open: Math.floor(Math.random() * 30) + 10,
        inProcess: Math.floor(Math.random() * 25) + 15,
        acknowledged: Math.floor(Math.random() * 20) + 20,
        onWatch: Math.floor(Math.random() * 15) + 5,
      },
    };
    setReports((prev) => [newReport, ...prev]);
    setSelectedReportId(newReport.id);
    setCurrentPage(1);
    setSearchQuery('');
  }, []);

  return {
    reports: paginatedReports,
    selectedReport,
    selectedReportId,
    searchQuery,
    currentPage,
    totalPages,
    addReport,
    selectReport: setSelectedReportId,
    handleSearch: (q) => { setSearchQuery(q); setCurrentPage(1); },
    goToPage: setCurrentPage,
  };
};
