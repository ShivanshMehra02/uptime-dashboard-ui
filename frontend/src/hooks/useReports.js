import { useState, useEffect, useCallback } from 'react';
import { getStoredReports, saveReports, initialReports } from '../data/mockData';

// Custom hook for managing reports state and localStorage persistence
export const useReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  // Load reports from localStorage on mount
  useEffect(() => {
    const storedReports = getStoredReports();
    setReports(storedReports);
    // Select the first report by default
    if (storedReports.length > 0) {
      setSelectedReportId(storedReports[0].id);
    }
  }, []);

  // Save reports to localStorage whenever they change
  useEffect(() => {
    if (reports.length > 0) {
      saveReports(reports);
    }
  }, [reports]);

  // Filter reports based on search query
  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedReports = filteredReports.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Get the currently selected report
  const selectedReport = reports.find((r) => r.id === selectedReportId) || null;

  // Add a new report
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

  // Select a report
  const selectReport = useCallback((reportId) => {
    setSelectedReportId(reportId);
  }, []);

  // Handle search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  // Handle page change
  const goToPage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Reset to initial data
  const resetReports = useCallback(() => {
    setReports(initialReports);
    setSelectedReportId(initialReports[0]?.id || null);
    setCurrentPage(1);
    setSearchQuery('');
  }, []);

  return {
    reports: paginatedReports,
    allReports: reports,
    filteredReports,
    selectedReport,
    selectedReportId,
    searchQuery,
    currentPage,
    totalPages,
    itemsPerPage: ITEMS_PER_PAGE,
    addReport,
    selectReport,
    handleSearch,
    goToPage,
    resetReports,
  };
};

export default useReports;
