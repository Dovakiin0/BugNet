interface FromToUser {
  username: string;
  id: number;
}

export interface NotificationType {
  From: FromToUser;
  To: FromToUser;
  from: number;
  to: number;
  id: number;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}
