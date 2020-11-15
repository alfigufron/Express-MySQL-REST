export default function example(req, res, next) {
  console.log('Middleware');
  
  return next();
}