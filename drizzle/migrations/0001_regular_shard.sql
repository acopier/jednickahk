ALTER TABLE `user` MODIFY COLUMN `username` varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `password_hash` varchar(255) NOT NULL;