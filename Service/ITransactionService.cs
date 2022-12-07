using backend.DatabaseModel;

namespace WebApplication1.Service;

public interface ITransactionService
{
    public List<TransactionViewModel> GetAllTransactions();

    public TransactionViewModel GetTransaction(int id);
}