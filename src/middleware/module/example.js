export default function example(req, res, next) {
  console.log(`Request : ${req.method}`);
  console.log(`URL : ${req.originalUrl}`);
  
  return next();
}