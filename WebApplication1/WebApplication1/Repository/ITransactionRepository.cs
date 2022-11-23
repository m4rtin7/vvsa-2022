using backend.DatabaseModel;

namespace WebApplication1.Repository;

public interface ITransactionRepository
{
    List<Transaction> GetAllTransactions();

    Transaction GetTransaction(int id);
}