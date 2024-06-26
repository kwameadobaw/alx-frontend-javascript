export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).reduce((allEmployees, item) => {
    return [...allEmployees, ...item];
  }, []);
}
