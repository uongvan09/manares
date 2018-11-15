export interface Order {
	key?:string;
	"status": number,
	"price": float,
	"table": string;
	"create": datetime;
}