import { Shopkeeper } from "@/modules/shopkeeper/domain/shopkeeper.domain";
import { User } from "@/modules/user/domain/user.domain";
import { Wallet } from "@/modules/wallet/domain/wallet.domain";

export class ShopkeeperAccount {
  constructor(
    private user: User,
    private shopkeeper: Shopkeeper,
    private wallet: Wallet
  ) {}
  
}
