
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const serviceLineChartRef = useRef<HTMLCanvasElement>(null);
  const impactRadarChartRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Initialize charts when component mounts
    if (serviceLineChartRef.current && impactRadarChartRef.current) {
      initializeServiceLineChart();
      initializeImpactRadarChart();
    }
    
    // Cleanup charts when component unmounts
    return () => {
      Chart.getChart(serviceLineChartRef.current as HTMLCanvasElement)?.destroy();
      Chart.getChart(impactRadarChartRef.current as HTMLCanvasElement)?.destroy();
    };
  }, []);
  
  const initializeServiceLineChart = () => {
    const ctx = serviceLineChartRef.current?.getContext('2d');
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Data Intelligence', 'Compliance & Risk', 'Operational Efficiency', 'Client Experience', 'Financial Management', 'Knowledge & Learning'],
        datasets: [
          {
            label: 'TAX',
            data: [8.2, 9.3, 8.5, 7.9, 7.4, 6.1],
            backgroundColor: 'rgba(66, 133, 244, 0.7)',
            borderColor: 'rgba(66, 133, 244, 1)',
            borderWidth: 1
          },
          {
            label: 'ASR',
            data: [8.7, 9.5, 8.1, 7.2, 6.8, 7.3],
            backgroundColor: 'rgba(15, 157, 88, 0.7)',
            borderColor: 'rgba(15, 157, 88, 1)',
            borderWidth: 1
          },
          {
            label: 'DEALS',
            data: [9.4, 8.1, 8.7, 6.9, 8.6, 6.4],
            backgroundColor: 'rgba(244, 180, 0, 0.7)',
            borderColor: 'rgba(244, 180, 0, 1)',
            borderWidth: 1
          },
          {
            label: 'IFS',
            data: [7.8, 7.2, 9.1, 6.8, 8.9, 8.2],
            backgroundColor: 'rgba(219, 68, 55, 0.7)',
            borderColor: 'rgba(219, 68, 55, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              padding: 20,
              font: {
                family: "'Inter', sans-serif",
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#333',
            bodyColor: '#666',
            bodyFont: {
              family: "'Inter', sans-serif"
            },
            titleFont: {
              family: "'Inter', sans-serif",
              weight: '600'
            },
            borderColor: 'rgba(0, 0, 0, 0.05)',
            borderWidth: 1,
            padding: 12,
            boxPadding: ,
            usePointStyle: true,
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.raw + '/10';
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            ticks: {
              font: {
                family: "'Inter', sans-serif",
                size: 11
              },
              color: '#666'
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            border: {
              display: false
            }
          },
          x: {
            ticks: {
              font: {
                family: "'Inter', sans-serif",
                size: 11
              },
              color: '#666',
              maxRotation: 45,
              minRotation: 45
            },
            grid: {
              display: false
            },
            border: {
              display: false
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
  };
  
  const initializeImpactRadarChart = () => {
    const ctx = impactRadarChartRef.current?.getContext('2d');
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Time Savings', 'Error Reduction', 'User Adoption', 'ROI Potential', 'Implementation Ease', 'Change Management Ease'],
        datasets: [
          {
            label: 'Operational Efficiency',
            data: [9.2, 8.7, 8.4, 9.0, 6.8, 6.4],
            fill: true,
            backgroundColor: 'rgba(15, 157, 88, 0.2)',
            borderColor: 'rgb(15, 157, 88)',
            pointBackgroundColor: 'rgb(15, 157, 88)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(15, 157, 88)'
          },
          {
            label: 'Data Intelligence',
            data: [8.5, 8.3, 6.3, 8.9, 2.2, 2.8],
            fill: true,
            backgroundColor: 'rgba(66, 133, 244, 0.2)',
            borderColor: 'rgb(66, 133, 244)',
            pointBackgroundColor: 'rgb(66, 133, 244)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(66, 133, 244)'
          },
          {
            label: 'Client Experience',
            data: [7.1, 6.2, 7.6, 7.8, 4.6, 4.1],
            fill: true,
            backgroundColor: 'rgba(244, 180, 0, 0.2)',
            borderColor: 'rgb(244, 180, 0)',
            pointBackgroundColor: 'rgb(244, 180, 0)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(244, 180, 0)'
          }
        ]
      },
      options: {
        elements: {
          line: {
            borderWidth: 2
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              padding: 20,
              font: {
                family: "'Inter', sans-serif",
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#333',
            bodyColor: '#666',
            bodyFont: {
              family: "'Inter', sans-serif"
            },
            titleFont: {
              family: "'Inter', sans-serif",
              weight: '600'
            },
            borderColor: 'rgba(0, 0, 0, 0.05)',
            borderWidth: 1,
            padding: 12,
            usePointStyle: true,
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.raw + '/10';
              }
            }
          }
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            pointLabels: {
              font: {
                family: "'Inter', sans-serif",
                size: 11
              },
              color: '#666'
            },
            ticks: {
              backdropColor: 'transparent',
              font: {
                size: 9
              },
              color: '#888'
            },
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };
  
  const phaseVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-gradient-to-r from-blue-dark to-primary rounded-2xl p-6 md:p-8 shadow-elegant mb-8 text-white"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Copilot Agent Strategy Dashboard</h1>
              <p className="mt-2 text-blue-light/90 text-sm md:text-base">Executive overview of AI copilot implementation strategy</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-light/90">Last updated: March 20, 2025</p>
              <p className="text-sm text-blue-light/90 mt-1">Prepared for: Firm Leadership</p>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
        >
          <motion.div variants={itemVariants} className="metric-card">
            <p className="metric-title">Est. Time Savings</p>
            <p className="metric-value">15-20%</p>
            <p className="metric-detail">Task completion efficiency</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="metric-card">
            <p className="metric-title">Est. Error Reduction</p>
            <p className="metric-value">30%</p>
            <p className="metric-detail">In manual processes</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="metric-card">
            <p className="metric-title">Target Adoption Rate</p>
            <p className="metric-value">70%</p>
            <p className="metric-detail">By end of Phase 2</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="metric-card">
            <p className="metric-title">ROI Timeline</p>
            <p className="metric-value">9 months</p>
            <p className="metric-detail">To positive ROI</p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Agent Categories */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="dashboard-card mb-6 lg:mb-8"
            >
              <h2 className="text-xl font-semibold mb-5">Agent Categories</h2>
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Data Intelligence</div>
                    <div className="text-sm text-muted-foreground">Analysis, Visualization, Insights</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-blue-light text-blue text-xs font-medium">High Value</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Compliance & Risk</div>
                    <div className="text-sm text-muted-foreground">Regulatory, Risk Assessment</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-red-light text-red text-xs font-medium">High Complexity</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Operational Efficiency</div>
                    <div className="text-sm text-muted-foreground">Workflow, Task Automation</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-green-light text-green text-xs font-medium">Highest ROI</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Client Experience</div>
                    <div className="text-sm text-muted-foreground">Communication, CRM, Onboarding</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-yellow-light text-yellow text-xs font-medium">Medium Impact</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Financial Management</div>
                    <div className="text-sm text-muted-foreground">Expense, Budgeting, Modeling</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-purple-light text-purple text-xs font-medium">Medium Value</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Knowledge & Learning</div>
                    <div className="text-sm text-muted-foreground">Project Management, Training</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-indigo-light text-indigo text-xs font-medium">Long-term Value</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Implementation Phases */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="dashboard-card"
            >
              <h2 className="text-xl font-semibold mb-5">Implementation Timeline</h2>
              <div className="space-y-5">
                <motion.div 
                  variants={phaseVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                  className="phase-card phase-1"
                >
                  <h3 className="font-semibold text-foreground">Phase 1: Foundation</h3>
                  <p className="text-sm text-muted-foreground mt-1">0-3 Months</p>
                  <div className="mt-2 text-sm">
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>Workflow Automation Agent</li>
                      <li>Task Automation Agent</li>
                      <li>Meeting Scheduling Agent</li>
                      <li>Document Management Agent</li>
                      <li>Communication Agent</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={phaseVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="phase-card phase-2"
                >
                  <h3 className="font-semibold text-foreground">Phase 2: Expansion</h3>
                  <p className="text-sm text-muted-foreground mt-1">4-6 Months</p>
                  <div className="mt-2 text-sm">
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>Data Analysis Agent</li>
                      <li>Client Insights Agent</li>
                      <li>Compliance Agent</li>
                      <li>Financial Modeling Agent</li>
                      <li>CRM Agent</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={phaseVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                  className="phase-card phase-3"
                >
                  <h3 className="font-semibold text-foreground">Phase 3: Advanced Integration</h3>
                  <p className="text-sm text-muted-foreground mt-1">7-9 Months</p>
                  <div className="mt-2 text-sm">
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>Knowledge Management Agent</li>
                      <li>Process Optimization Agent</li>
                      <li>Market Analysis Agent</li>
                      <li>Fraud Detection Agent</li>
                      <li>Performance Metrics Agent</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (spans 2 cols) */}
          <div className="lg:col-span-2">
            {/* Service Line Impact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="dashboard-card mb-6 lg:mb-8"
            >
              <h2 className="text-xl font-semibold mb-5">Service Line Impact Analysis</h2>
              <div className="chart-container mb-5">
                <canvas ref={serviceLineChartRef}></canvas>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Key Insights</h3>
                  <ul className="space-y-2 pl-5 list-disc text-sm text-muted-foreground">
                    <li>Tax benefits most from Compliance & Risk agents</li>
                    <li>Deals shows highest Data Intelligence value</li>
                    <li>IFS leads in Operational Efficiency needs</li>
                    <li>Assurance requires balanced implementation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Implementation Priorities</h3>
                  <ul className="space-y-2 pl-5 list-disc text-sm text-muted-foreground">
                    <li>Begin with cross-service value agents</li>
                    <li>Tailor second wave to service-specific needs</li>
                    <li>Focus on quick wins for initial momentum</li>
                    <li>Balance complexity with visible value</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Implementation Matrix */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="dashboard-card mb-6 lg:mb-8"
            >
              <h2 className="text-xl font-semibold mb-5">Implementation Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-left font-medium">Priority</th>
                      <th className="py-3 px-4 text-left font-medium">Agent Type</th>
                      <th className="py-3 px-4 text-left font-medium">Implementation Complexity</th>
                      <th className="py-3 px-4 text-left font-medium">Cross-Service Value</th>
                      <th className="py-3 px-4 text-left font-medium">Recommended Phase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-green mr-2"></span> High</td>
                      <td className="py-3 px-4">Workflow Automation</td>
                      <td className="py-3 px-4">Low</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Phase 1</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-green mr-2"></span> High</td>
                      <td className="py-3 px-4">Task Automation</td>
                      <td className="py-3 px-4">Low</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Phase 1</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-green mr-2"></span> High</td>
                      <td className="py-3 px-4">Data Analysis</td>
                      <td className="py-3 px-4">Medium</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Phase 2</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-yellow mr-2"></span> Medium</td>
                      <td className="py-3 px-4">Client Insights</td>
                      <td className="py-3 px-4">Medium</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Phase 2</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-yellow mr-2"></span> Medium</td>
                      <td className="py-3 px-4">Compliance</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Medium</td>
                      <td className="py-3 px-4">Phase 2</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-yellow mr-2"></span> Medium</td>
                      <td className="py-3 px-4">Knowledge Management</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Medium</td>
                      <td className="py-3 px-4">Phase 3</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-red mr-2"></span> Strategic</td>
                      <td className="py-3 px-4">Process Optimization</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Phase 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Impact Radar Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="dashboard-card"
            >
              <h2 className="text-xl font-semibold mb-5">Agent Category Impact Analysis</h2>
              <div className="chart-container mb-5">
                <canvas ref={impactRadarChartRef}></canvas>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Top Performers by Metric</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><span className="font-medium text-foreground">Time Savings:</span> Operational Efficiency (9.2/10)</li>
                    <li><span className="font-medium text-foreground">Error Reduction:</span> Compliance & Risk (9.1/10)</li>
                    <li><span className="font-medium text-foreground">User Adoption:</span> Operational Efficiency (8.4/10)</li>
                    <li><span className="font-medium text-foreground">ROI Potential:</span> Operational Efficiency (9.0/10)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Implementation Considerations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><span className="font-medium text-foreground">Lowest Complexity:</span> Operational Efficiency (3.2/10)</li>
                    <li><span className="font-medium text-foreground">Highest Complexity:</span> Data Intelligence (7.8/10)</li>
                    <li><span className="font-medium text-foreground">Change Management:</span> Easiest for Operational Efficiency</li>
                    <li><span className="font-medium text-foreground">Aggregate Score:</span> Operational Efficiency leads (8.2/10)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
